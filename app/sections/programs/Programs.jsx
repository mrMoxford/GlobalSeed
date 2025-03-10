
import MiniCard from '@/app/components/mini-card/MiniCard'
import style from './programs.module.css'
import {getMiniCard} from "../../lib/contentful"
import { draftMode } from 'next/headers'
import { ContentfulPreviewProvider } from '@/app/api/contentful-preview/previewAPI'


export const dynamic = "force-dynamic";

export default async function Programs() {
  
  const {isEnabled} = await draftMode()

  const globalSwim = await getMiniCard("2Jazk6kLlVg74UHIdQQKyi", isEnabled)
  const globalCheer = await getMiniCard("6ULZMQgTJsMViKlDQrVsFr", isEnabled)
  const globalPark = await getMiniCard("5NCb1ROGaiLt7Rf3fGiIhy", isEnabled)
  return (
  
    <section className={style.programsContainer}>
        <ContentfulPreviewProvider
      locale="en-US"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
      debugMode={isEnabled}
      targetOrigin="https://app.contentful.com"
    >
        <h2 className={style.title}> our programs</h2>
        <div className={style.cardGrid}>
            <MiniCard content={globalSwim} />
            <MiniCard content={globalCheer} />
            <MiniCard content={globalPark} />
        </div>
      </ContentfulPreviewProvider>
    </section>
   
  )
}