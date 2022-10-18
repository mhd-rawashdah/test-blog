import { useState } from "react";
import BlogsList from "../../components/BlogsList";

const HomePage = () => {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'Design Pattern',
            desc: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget.',
            author: {name: 'Mohammad'},
            tags: []
        },
        {
            id: 2,
            title: 'Microservice',
            desc: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget.',
            author: {name: 'Ahmad'},
            tags: []
        },
    ]);

    return (
        <div>
            <BlogsList blogs={blogs} /> 
        </div>
    )
}


export default HomePage;