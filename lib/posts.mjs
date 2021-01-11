import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getCategoryData() {
  const dirNames = fs.readdirSync(postsDirectory)

  const fileNamesData = dirNames.map(dirName => {

    const categoryDirectory = path.join(process.cwd(), `posts/${dirName}`)
    const fileNames = fs.readdirSync(categoryDirectory)

    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
      // Read markdown file as string
      const fullPath = path.join(`${postsDirectory}/${dirName}`, fileName)
      console.log(fullPath);
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      console.log(fileContents);
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)
    
      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })
    
    // [
    //   {
    //     category: 'fragrance',
    //     data: [
    //       'aesoproomspray.md',
    //       'marksandwebaroma.md',
    //       'threerhythmkou copy.md'
    //     ]
    //   },
    //   { category: 'room', data: [ 'map.md' ] }
    // ]
    return {
      category: dirName,
      data: allPostsData
    }
  })


  // const data = fileNamesData.map(fileName => {
  //   // Remove ".md" from file name to get id
  //   console.log(fileName);

  //   const test = fileName.map(name => {
  //     const id = name.replace(/\.md$/, '')

  //     const fullPath = path.join(postsDirectory, fileName)
  //     const fileContents = fs.readFileSync(fullPath, 'utf8')

  //     // Use gray-matter to parse the post metadata section
  //     const matterResult = matter(fileContents)
    
  //     // Combine the data with the id
  //     return {
  //       id,
  //       ...matterResult.data
  //     }
  //   })
  //     // const id = fileName.replace(/\.md$/, '')
  //     // Read markdown file as string
  //     // const fullPath = path.join(postsDirectory, fileName)
  //     // const fileContents = fs.readFileSync(fullPath, 'utf8')

  //     // // Use gray-matter to parse the post metadata section
  //     // const matterResult = matter(fileContents)
    
  //     // Combine the data with the id
  //     return test
  //   })

  return fileNamesData;
}

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory)
//   let arr = []

//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')
//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)
  
//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
  
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

export function getAllPostIds() {

    // // [
  // //   {
  // //     params: {
  // //       category: 'fragrance'
  // //       id: 'aesoproomspray'
  // //     }
  // //   },
  // //   {
  // //     params: {
  // //       category: 'fragrance'
  // //       id: 'three'
  // //     }
  // //   }
  // // ]

  const readdirRecursively = (dir, files = []) => {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const dirs = [];
    for (const dirent of dirents) {
      if (dirent.isDirectory()) dirs.push(`${dir}/${dirent.name}`);
      if (dirent.isFile()) files.push(`${dir}/${dirent.name}`);
    }
    for (const d of dirs) {
      files = readdirRecursively(d, files);
    }
    return files;
  };

  const allFiles = readdirRecursively('./posts')
  console.log(allFiles);

  const test = allFiles.map(file => {

    const category = file.match(/\.\/posts\/(.*)\//);
    console.log(category[1]);
    const idRegExp = new RegExp(`${category[1]}\/(.*)\.md`)
    const id = file.match(idRegExp);
    console.log(id[1]);
    
    return {
      params: {
        category: category[1],
        id: id[1]
        }
      }
  })

  console.log(test);


  const categories = fs.readdirSync(postsDirectory)

  
  // [
  //   [
  //     'aesoproomspray.md',
  //     'marksandwebaroma.md',
  //     'threerhythmkou copy.md'
  //   ],
  //   [ 'map.md' ]
  // ]
  // const allFiles = categories.map(category => {
  //   const files = fs.readdirSync(`${postsDirectory}/${category}`)

  //   const test = files.map(file => {
  //     return {
        
  //         category: category,
  //         id: file.replace(/\.md$/, '')
        
  //     }
  //   })

  //   return test
  //   // [
  //   //   {
  //   //     category: 'fragrance',
  //   //     files: [
  //   //       'aesoproomspray.md',
  //   //       'marksandwebaroma.md',
  //   //       'threerhythmkou copy.md'
  //   //     ]
  //   //   },
  //   //   { category: 'room', files: [ 'map.md' ] }
  //   // ]
  // })

  // const params = (files) => files.map(file => {
  //   return file.replace(/\.md$/, '')
  // })
  // console.log(params)

  
  // // [
  // //   {
  // //     params: {
  // //       category: 'fragrance'
  // //       id: 'aesoproomspray'
  // //     }
  // //   },
  // //   {
  // //     params: {
  // //       category: 'fragrance'
  // //       id: 'three'
  // //     }
  // //   }
  // // ]
  // return allFiles
}
getAllPostIds();

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents)

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // データを id および contentHtml と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
