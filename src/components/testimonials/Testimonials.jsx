import "./testimonials.scss";
import FunctionsIcon from '@material-ui/icons/Functions';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Fibonacci",
      title: "",
      img:
        "https://static.thenounproject.com/png/1751839-200.png",
      icon: "",
      desc:
        "Print N numbers of Fibonacci sequence.",
    },
    {
      id: 2,
      name: "",
      title: "Animaflix",
      img:
        "https://i.pinimg.com/originals/bb/23/46/bb2346582caedef6034cb425150edcbc.jpg",
      icon: "",
      desc:
        "A mockup version of Netflix with anime movies directed by Hayao Miyazaki.",
      featured: true,
    },
    {
      id: 3,
      name: "Prime Number",
      title: "",
      img:
        "https://lh4.ggpht.com/35bNgc2un3avtjpPd2sVPhvQjPE-mdrEdULmWHJmhnHrcayrJFGk8Ata7to9akKCzX0",
      icon: "",
      desc:
        "The challenge is to create the fastest algorithm to find prime numbers.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Coding Challenges</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <a href="https://github.com/vfreis/Codding-Challenges" target="_blank">
              <img
                className="user"
                src={d.img}
                alt=""
    
              /></a>
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
