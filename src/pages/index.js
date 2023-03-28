import Link from "next/link";
import router from "../lib/router";

export default function Index({ user }) {
  console.log(user)
	return <div style={{ textAlign: "center" }}>
		{user
			? <div>
				Welcome back {user.displayName}!<br />
				From logging in, your SteamID is {user.id}.<br />
				<Link href="/api/auth/logout">Logout</Link>
			</div>

			:<div>
				Welcome!<br />
				<Link href="/api/auth/login">Login</Link>
			</div>
		}
	</div>;
}


export async function getServerSideProps({req, res}) {
    await router.run(req, res);
    return { props: { user: req.user || null } };
}
