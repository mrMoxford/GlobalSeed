"use client"
import { ElfsightWidget } from 'next-elfsight-widget';
import style from "./instagram.module.css"

const Instagram = () => {
  return (
    <div className={style.container}>
      <ElfsightWidget widgetId={"f51defa7-b1a5-4e10-8d28-4e357ce5fa72"} lazy />;
    </div>
  )
}

export default Instagram