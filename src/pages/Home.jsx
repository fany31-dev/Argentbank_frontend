import { Link } from "react-router-dom";
import BankTree from "../assets/bank-tree.jpeg";
import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";
import Features from "../components/Features";

function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted content</h2>
          <p className="subtitle">No fees</p>
          <p className="subtitle">No minimum deposit</p>
          <p className="subtitle">High interest rates</p>
          <p className="text">
            Open a savings account with Argent Bank today !
          </p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features
          image={IconChat}
          alt="icone d'un chat"
          title="You are our #1 priority"
          texte="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Features
          image={IconMoney}
          alt="icone representant des billets de banque"
          title="More savings means higher rates"
          texte="The more you save with us, the higher your interest rate will be!"
        />
        <Features
          image={IconSecurity}
          alt="icone security"
          title="Security you can trust"
          texte="We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </main>
  );
}

export default Home;
