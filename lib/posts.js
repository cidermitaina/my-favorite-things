import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getCategorizedDaata() {
  const dirNames = fs.readdirSync(postsDirectory)

  const categorizedData = dirNames.map(dirName => {

    const categoryDirectory = path.join(process.cwd(), `posts/${dirName}`)
    const fileNames = fs.readdirSync(categoryDirectory)

    const allPostsData = fileNames.map(fileName => {

      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(`${postsDirectory}/${dirName}`, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
    
      return {
        id,
        ...matterResult.data
      }
    })
    
    return {
      category: dirName,
      data: allPostsData
    }
  })

  return categorizedData;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  let arr = []

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {

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

  const params = allFiles.map(file => {

    const category = file.match(/\.\/posts\/(.*)\//);
    const idRegExp = new RegExp(`${category[1]}\/(.*)\.md`)
    const id = file.match(idRegExp);
    
    return {
      params: {
        category: category[1],
        id: id[1]
        }
      }
  })

  return params

}

export async function getPostData(id, category) {
  const fullPath = path.join(postsDirectory, `${category}/${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
