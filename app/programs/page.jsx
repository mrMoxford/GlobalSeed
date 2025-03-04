import { draftMode } from "next/headers";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import GlobalCheer from '../sections/globalCheer/GlobalCheer'
import GlobalAdventure from '../sections/globalAdventure/GlobalAdventure'
import style from './pricing.module.css'
import {getProgramme} from "../lib/contentful"






export default async function Programs() {
  const isEnabled = draftMode();
  const GlobalCheerA = await getProgramme("5RBifgexTEE1zE3WbD1apc", isEnabled)
  const GlobalCheerB = await getProgramme("66vIUTeoN51KqEVzEKL0jD", isEnabled)
  const GLobalAdventureT = await getProgramme("34IP87NRcEkz6X7xDNfwqb", isEnabled)
  const GLobalAdventureS = await getProgramme("5fZbbYpbjq3if8qzv6oCzO", isEnabled)
  return (
    <ContentfulLivePreviewProvider
      locale="en-US" // This is required and allows you to set the locale once and have it reused throughout the preview
      enableInspectorMode={isEnabled} // This allows you to toggle the inspector mode which is on by default
      enableLiveUpdates={isEnabled} // This allows you to toggle the live updates which is on by default
      debugMode={isEnabled} // This allows you to toggle the debug mode which is off by default
      targetOrigin="https://app.contentful.com" // This allows you to configure the allowed host of the live preview (default: ['https://app.contentful.com', 'https://app.eu.contentful.com'])
    >
    <main className={style.container}>
        <h1 className={style.title}>Programs</h1>
        <section className={style.cardContainer}>
          <div className={style.cardGrid}>
          <GlobalAdventure className={style.primaryCard} content={GLobalAdventureT}/>
          <GlobalAdventure className={style.secondaryCard} content={GLobalAdventureS}/>
          </div>
        </section>
        <section className={style.cardContainer}>
          <div className={style.cardGrid}>
          <GlobalCheer className={style.primaryCard} content={GlobalCheerB}/>
          <GlobalCheer className={style.secondaryCard} content={GlobalCheerA}/>
          </div>
          
        </section>
    </main>
    </ContentfulLivePreviewProvider>
  )
}
