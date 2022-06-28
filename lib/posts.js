import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    //get files
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
            //remove md
            const id = fileName.replace(/\.md$/, '');
            //read mardownd
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            //use gray matter 
            const matterResult = matter(fileContents);
            //combine la daat con id
            return {
                id,
                ...matterResult.data,
            }
    });
    //sort post by date
    return allPostsData.sort(({ date: a}, { date: b}) =>{
        if (a < b) {
            return 1;
        }else if (a > b) {
            return -1;
        }else {
            return 0;
        }
    })
}


