import { Component } from "react";
import BlogMain from "./main";

export default class Blog extends Component {
   state = {
      blog: [
         {
            title: "UI Interactions of the week",
            date: "12 Feb 2019 | Express, Handlebars",
            description:
               "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
         },
         {
            title: "UI Interactions of the week",
            date: "12 Feb 2019 | Express, Handlebars",
            description:
               "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
         },
         {
            title: "UI Interactions of the week",
            date: "12 Feb 2019 | Express, Handlebars",
            description:
               "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
         },
         {
            title: "UI Interactions of the week",
            date: "12 Feb 2019 | Express, Handlebars",
            description:
               "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
         },
      ],
   };
   render() {
      const { blog } = this.state;
      return (
         <div>
            <BlogMain blog={blog} />
         </div>
      );
   }
}
