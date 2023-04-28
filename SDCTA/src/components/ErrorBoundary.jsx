{/* This file is .jsx instead of .tsx because of the use of class. This is used only when
  TableauEmbed gets an invalid URL and crashes but should likely not happen because 
  URLs that we use and get are from our backend which would be already verified.  */}

import React from "react";
import { Error404 } from "../components/404";


class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { error: false };
   }

   static getDerivedStateFromError(error) {
      return { error: error };   
   }

   render() {
      if (this.state.error) {
         return <Error404 />;
      }

   return this.props.children; 
   }
}
   
export default ErrorBoundary;