import Link from "next/link";
import classes from "./button.module.css";

export default function Button(props: { link: string; children: React.ReactNode }) {
  return <Link href={props.link} legacyBehavior>
    <a className={classes.btn}>{props.children}</a>
  </Link>;
}