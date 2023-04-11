import Head from "next/head"
import Login from "../components/Login/login"


const User = () => {
  return (
    <>
      <Head>
        <title>dwp Chatbot</title>
        <meta name="description" content="ChatGPT for dwp" />
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-screen place-items-center">
          <Login />
      </div>
    </>
  )
}
export default User