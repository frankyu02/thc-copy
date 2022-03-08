import React from 'react';
import { Helmet } from 'react-helmet';
import icon from '../../assets/images/favicon.png'
import sharepic from '../../assets/images/favicon.png';
import sharepic2 from '../../../static/images/favicon.png'

const Seo = ({title, description, schemaMarkup, image, location}) => {
    console.log("SEO - sharepic", sharepic)
    console.log("SEO - sharepic2", sharepic2)

    const sharepicURL = 'https://thcwebsitedevelopment.gatsbyjs.io/images/favicon.png';
    return(
        <Helmet>
            <html lang="en"/>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/x-icon" href={icon}/>
            <meta charSet="utf-8" />

            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:image" content={image || sharepicURL} />
            <meta property="og:title" content={title}  />
            <meta property='og:type' content="website"/>
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description}/>

            <meta itemprop="name" content={title} />
            {location && <meta itemprop="url" content={location.href} />}
            <meta itemprop="description" content={description} />

            <meta name="twitter:title" content={title}/>
            {location && <meta name="twitter:url" content={location.href}/>}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image || sharepicURL}/>

            {schemaMarkup &&
                <script type="application/ld+json">
                    {JSON.stringify(schemaMarkup)}
                </script>
            }              
        </Helmet>
    )
}
export default Seo;