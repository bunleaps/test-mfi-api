import useSWR from "swr";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/mfis", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <center>
        <h1>MFI Table Database</h1>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Address</th>
              <th className={styles.th}>Roles</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mfi) => (
              <tr key={mfi.id} className={styles.tr}>
                <td className={styles.td}>
                  <Link href="/mfis/[id]" as={`/mfis/${mfi.id}`}>
                    {mfi.mfi_info.name}
                  </Link>
                </td>
                <td className={styles.td}>{mfi.mfi_info.address}</td>
                <td className={styles.td}>
                  <ul>
                    {mfi.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
