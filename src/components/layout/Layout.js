import React from "react"
import "normalize.css"
import GlobalStyles from "../../styles/GlobalStyles"
import Typography from "../../styles/Typography"
import { HeaderMenu } from "../header/HeaderMenu"
import { Footer } from "../footer/Footer"
import { AgeGate } from "../AgeGate/AgeGate";
import { ShopLink } from "../ui/shop_link/ShopLink"
import { FilledCart } from "../header/components/Cart/dummydata"
import {globalHistory, Location} from '@reach/router'

//Apollo
import { useApollo, createApolloClient } from "../../apollo/apollo";
import { ApolloProvider } from "@apollo/client"

const Layout = ({ children }) => {
  const apolloClient = useApollo();
  return (
    <>
      <GlobalStyles />
      <Typography />
      <AgeGate/>
      <ApolloProvider client={apolloClient}>
        <HeaderMenu cart={FilledCart}/>
        <ShopLink/>
        <main>
          {children}
        </main>
      </ApolloProvider>
      <Footer />      
    </>
  )
}

export default Layout;