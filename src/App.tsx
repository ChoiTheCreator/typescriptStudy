import './App.css';

function App() {
  function marry(x: number, y: boolean, z: string): string {
    let num: number = x % 100;
    let house: number;
    {
      y === true ? (house = 500) : (house = 0);
    }

    let att: number;
    {
      z === '상' ? (att = 100) : (att = 0);
    }

    let total = num + att + house;
    if (total >= 600) {
      return '결혼가능';
    } else {
      return '못함';
    }
  }

  return <></>;
}

export default App;
