import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Mfi() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/mfis/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.eachinfo}>
      <h1>{data.mfi_info.name}</h1>
      <div className={styles.info}>
        <h4 className={styles.h4}>Address: </h4>
        <p className={styles.h4}>{data.mfi_info.address}</p>
        <br />
        <h4 className={styles.h4}>Vision: </h4>
        <p className={styles.h4}>{data.mfi_info.about}</p>
      </div>
      <ul>
        {data.roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
    </div>
  );
}
