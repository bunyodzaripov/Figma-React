import { Component } from "react";

export default class Footer extends Component {
   render() {
      return (
         <div className="p-4 text-[#21243D]">
            <div className=" justify-center text-5xl flex gap-3">
               <i className="fa-brands fa-square-facebook"></i>
               <i className="fa-brands fa-instagram"></i>
               <i className="fa-brands fa-twitter"></i>
               <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="mt-4 text-center">
               <p>Copyright ©2020 All rights reserved </p>
            </div>
         </div>
      );
   }
}
