import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import style from './landing.module.scss';
import { styles } from '@/helpers/helpers';
import Logotype from '@/components/Logotype';

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        console.log(session);
        return (
            <div>
                <h1>protected infos</h1>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }

    return (
        <div className={styles([style.landing, style.page])}>
            <div className="header">
                <Logotype width="200px" height="100px" />
                <button onClick={() => signIn('spotify')}>
                    Login with
                    <Image
                        src="/spotify-logo-w.png"
                        width={70}
                        height={20}
                        alt="Spotify Logo"
                    />
                </button>
            </div>
            <div className="content">
                <h1>NEVER RUN OUT OF FRESH BEATS</h1>
                <p>discover new music and expand your playlist!</p>
                <h4>Connect your spotify -&gt; select your preferences -&gt; get new beats every days</h4>
            </div>
  
        </div>
    );
}
