import style from "./studyAbroad.module.css"
import { getStudyAbroad } from "../lib/contentful"
import { ContentfulPreviewProvider } from "../api/contentful-preview/previewAPI";
import { draftMode } from "next/headers"
import StudyContent from "./StudyContent";

export const dynamic = "force-dynamic";

export default async function StudyAbroad() {

  const {isEnabled} = await draftMode()
  const data = await getStudyAbroad("7zAb1BVOeKLYKiGqlD8yk2", isEnabled)
  return (
    <section className={style.studyAbroad}>
     <ContentfulPreviewProvider
     locale="en-US"
     enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
     debugMode={isEnabled}
    targetOrigin="https://app.contentful.com">
      <StudyContent data= {data}/>
     </ContentfulPreviewProvider>
    </section>
  )
}
