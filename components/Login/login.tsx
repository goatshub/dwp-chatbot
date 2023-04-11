import { useSession, signIn, signOut } from 'next-auth/react'
import styles from "./login.module.css"


const Login = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
     
  return (
    <div className={styles.signedInStatus}>
        <div className='m-5'>
            <h2 className="text-4xl font-extrabold dark:text-white">dwp <span className='font-normal'>| Chatbot</span></h2>
            <p className="my-4 text-lg text-red-700">Please sign in using work email (xxxx@dwp.com) to access.</p>
            <p className="my-4 text-md text-gray-500">Chat history and prompts are kept only on your browser and not saved on database.</p>
        </div>
        <p
            className={`nojs-show ${
                !session && loading ? styles.loading : styles.loaded
            }`}
        >
        {!session && (
            <>
                <span className={styles.notSignedInText}>
                    You are not signed in
                </span>
                <a
                    href={`/api/auth/signin`}
                    className={styles.buttonPrimary}
                    onClick={(e) => {
                        e.preventDefault()
                        signIn('GoogleProvider', { callbackUrl: '/' })
                    }}
                >
                    Sign in
                </a>
            </>
        )}
        {session?.user && (
            <>
                <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={styles.avatar}
                />
                <span className={styles.signedInText}>
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.email || session.user.name}</strong>
                </span>
                <a
                    href={`/api/auth/signout`}
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault()
                        signOut()
                    }}
                >
                    Sign out
                </a>
            </>
        )}
        </p>
    </div>
  )
}
export default Login