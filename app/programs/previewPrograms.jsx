
import GlobalAdventure from '../sections/globalAdventure/GlobalAdventure';
import style from './pricing.module.css';
import { getProgramme } from "../lib/contentful";

export default async function PreviewPrograms({ searchParams }) {
  // Get the `draft=true` query parameter from the URL
  const isDraftMode = searchParams?.draft === 'true';
  const programId = searchParams?.id;  // ID of the program to preview

  // Fetch the program data (draft content if `draft=true`)
  const programData = await getProgramme(programId, isDraftMode);

  if (!programData) {
    return <div>Program not found for preview.</div>;
  }

  return (
    <main className={style.container}>
      <h1 className={style.title}>Preview Program: {programData.title}</h1>
      <section className={style.cardContainer}>
        <div className={style.cardGrid}>
          <GlobalAdventure className={style.primaryCard} content={programData} />
        </div>
      </section>
    </main>
  );
}
