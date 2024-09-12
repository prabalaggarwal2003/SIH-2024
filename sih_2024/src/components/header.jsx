import './header.css'
export default function Header() {

  return (
    <header className="bg-white">
        <section className="supreme-court">
        <img src="https://thebasicstructureconlaw.wordpress.com/wp-content/uploads/2020/10/1573657162supreme-court-of-india.jpeg?w=736" alt="" />
        <div  className="L1"> <h1 style={{textAlign:'left', fontSize:'4rem'}}>SANSTHAYE AUR SAMVIDHAN</h1> 
        <h1  className="L2"  >LET'S LEARN <span style={{color: "red"}}>CONSTITUTION</span> IN A SIMPLE MANNER</h1>
        <h2 className="L3">Making it easier to learn Constitution everyday</h2>
        </div>
        </section>
      
             
    </header>
  )
}