function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Khaterine Johnson" />
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
