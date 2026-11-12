export default function Home() {
  //
  const menuItems = [
    {
      id: 1,
      name: "Kacci Biriyani",
      description:
        "A flavorful rice dish cooked with tender meat, aromatic spices, and saffron.",
      price: "$12.99",
    },
    {
      id: 2,
      name: "Morog polao",
      description:
        "A traditional Bengali rice dish cooked with aromatic spices and tender meat.",
      price: "$10.99",
    },
    {
      id: 3,
      name: "Beef tehari",
      description:
        "A hearty beef curry served with fragrant rice and aromatic spices.",
      price: "$8.99",
    },
    {
      id: 4,
      name: "Chicken Roast",
      description:
        "Juicy roasted chicken marinated with a blend of spices and herbs.",
      price: "$9.99",
    },
    {
      id: 5,
      name: "Borhani",
      description:
        "A traditional Bengali drink made with yogurt, spices, and herbs.",
      price: "$11.99",
    },
    {
      id: 6,
      name: "Jali Kabab",
      description:
        "Grilled skewered meat marinated with spices and served with chutney.",
      price: "$9.99",
    },
  ];
  //
  return (
    <section className="flex justify-center items-center ">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-center">
          Family Food Village Menu
        </h1>
        <p className="text-center mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          dolores! Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          dolores! Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          dolores! Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          dolores! Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
        </p>
        <h2 className="mt-2 font-bold text-green-400">Bangla Kitchen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {menuItems.map((item) => (
            <div key={item.id} className="border p-4 my-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              <p className="font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
