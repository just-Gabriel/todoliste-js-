import { Button } from "./Button";
import { Link } from "./Link";

export function Header() {
  return (
    <header>
      <p>ToDo liste</p>
      <Button>+ Créer une tache</Button>
      <Link>Voir les taches</Link>
    </header>
  );
}
