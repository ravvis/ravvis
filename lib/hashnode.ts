export async function getPosts(){
    console.log({HASHNODE_TOKEN: process.env.HASHNODE_TOKEN})
    return fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': process.env.HASHNODE_TOKEN || "",
        },
        body: JSON.stringify({
            query: `query { user(username : "${process.env.HASHNODE_USERNAME}") { publication { posts { slug, title, brief, coverImage } } } }`
        }),
    })
}