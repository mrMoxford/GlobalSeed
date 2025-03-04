import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ContentfulLivePreviewProvider } from "./previewPrograms";
import GlobalCheer from "../sections/globalCheer/GlobalCheer";
import GlobalAdventure from "../sections/globalAdventure/GlobalAdventure";
import style from "./pricing.module.css";
import { getProgramme } from "../lib/contentful";

// ✅ Async function to fetch data
async function fetchProgramData(isEnabled) {
  const GlobalCheerA = await getProgramme("5RBifgexTEE1zE3WbD1apc", isEnabled);
  const GlobalCheerB = await getProgramme("66vIUTeoN51KqEVzEKL0jD", isEnabled);
  const GlobalAdventureT = await getProgramme("34IP87NRcEkz6X7xDNfwqb", isEnabled);
  const GlobalAdventureS = await getProgramme("5fZbbYpbjq3if8qzv6oCzO", isEnabled);

  if (!GlobalCheerA || !GlobalCheerB || !GlobalAdventureT || !GlobalAdventureS) {
    notFound();
  }

  return { GlobalCheerA, GlobalCheerB, GlobalAdventureT, GlobalAdventureS };
}

// ✅ Async component
export default async function Programs() {
  const { isEnabled } = draftMode(); // ✅ Correct way to access draft mode
  const { GlobalCheerA, GlobalCheerB, GlobalAdventureT, GlobalAdventureS } = await fetchProgramData(isEnabled);

  // ✅ Conditionally wrap in preview provider
  const Content = (
    <main className={style.container}>
      <h1 className={style.title}>Programs</h1>

      <section className={style.cardContainer}>
        <div className={style.cardGrid}>
          <GlobalAdventure className={style.primaryCard} content={GlobalAdventureT} />
          <GlobalAdventure className={style.secondaryCard} content={GlobalAdventureS} />
        </div>
      </section>

      <section className={style.cardContainer}>
        <div className={style.cardGrid}>
          <GlobalCheer className={style.primaryCard} content={GlobalCheerB} />
          <GlobalCheer className={style.secondaryCard} content={GlobalCheerA} />
        </div>
      </section>
    </main>
  );

  // ✅ If preview mode is enabled, wrap with ContentfulLivePreviewProvider
  return isEnabled ? (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
      debugMode={isEnabled}
      targetOrigin="https://app.contentful.com"
    >
      {Content}
    </ContentfulLivePreviewProvider>
  ) : (
    Content
  );
}
