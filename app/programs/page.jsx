export default async function Programs() {
  const { isEnabled } = draftMode(); // ✅ Correct way to access draft mode
  console.log("Is Preview Mode Enabled?", isEnabled);  // Debugging

  const { GlobalCheerA, GlobalCheerB, GlobalAdventureT, GlobalAdventureS } = await fetchProgramData(isEnabled);

  if (!GlobalCheerA || !GlobalCheerB || !GlobalAdventureT || !GlobalAdventureS) {
    notFound();
  }

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
