import { Component } from "react";

export default class BlogMain extends Component {
   render() {
      const { blog } = this.props;
      return (
         <>
            <h1 className="text-4xl font-bold  w-[90%] sm:w-[70%] lg:w-[60%] mx-auto">
               BLOG
            </h1>
            {blog.map((blog, index) => {
               return (
                  <div
                     key={index}
                     className="my-10 w-[90%] sm:w-[70%] lg:w-[60%] mx-auto"
                  >
                     <h1 className="text-3xl font-semibold">{blog.title}</h1>
                     <p className="">{blog.date}</p>
                     <p className="text-xl">{blog.description}</p>
                  </div>
               );
            })}
         </>
      );
   }
}
