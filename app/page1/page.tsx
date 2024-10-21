import { redirect } from "next/navigation";

export default async function Page() {
	redirect("/page2");

	return <div>page1</div>;
}
