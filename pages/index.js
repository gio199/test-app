import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>


        <title>Techinformi</title>
        <meta name="description" content="Techinformi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>







<topp className={styles.main_top}>

   <h2 className={styles.title}> საქართველოს საინჟინრო სიახლენი (სსს)</h2>
    <h2 className={styles.title}> GEORGIAN ENGINEERING NEWS (GEN)</h2>


    <div className={styles.text}>
        <p>სამეცნიერო ჟურნალი საქართველოს საინჟინრო სიახლენი - Georgian Engineering News (GEN) არის
            რეცენზირებადი და რეფერირებადი პერიოდული გამოცემა. მისი დამფუძნებელი და მთავარი რედაქტორი გახლდათ
            საქართველოს ტექნიკური უნივერსიტეტის პროფესორი ვლადიმერ დოლიძე.</p>
        <p>
            ჟურნალი GEN გამოდის საერთაშორისო საინჟინრო აკადემიის და საქართველოს საინჟინრო აკადემიის ეგიდით.
            მასში იბეჭდება საინჟინრო დარგის ორიგინალური, თეორიული და ექსპერიმენტული შრომები ენერგეტიკის,
            ტრანსპორტის, მშენებლობის, მანქანათმშენებლობის და ხელსაწყოთმშენებლობის, ელექტროტექნიკის,
            ელექტრონიკის
            და ინფორმატიკის, ქიმიური, მსუბუქი და კვების მრეწველობის, მეტალურგიის, გეოლოგიის, აგროტექნიკის,
            ეკოლოგიის, ეკონომიკის და სხვა დარგებში.
        </p>

    </div>

</topp>

      <main className={styles.main}>
          <h2 className={styles.title}> Midle</h2>
          <div className={styles.text_lef}>
              <p> Georgian Engineering News </p>


          </div>


      </main>
<bottom className={styles.main_bottom}>
<h1 className={styles.title}>Bottom</h1>

    <div className={styles.text}>
    <p>
        In 1993 Alexi Gorgidze Prize was established by the Georgian Engineering Academy, and, at the
        Georgian Technical University, A. Gorgidze grant was founded. A. Gorgidze’s name was assigned to the
        Scientific-Educational Laboratory of Engineering Mechanics at the Georgian Technical University. A.
        Gorgidze’s name was given to Tbilisi Workshop on Theoretical and Applied Mechanics. One of the streets in
        the city of Kutaisi was called after A.Gorgidze.
    </p>
        </div>
</bottom>
      <footer className={styles.footer}>
        <a>
            Copyright by GEN LTD

        </a>
      </footer>
    </div>
  )
}
