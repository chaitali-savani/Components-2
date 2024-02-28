export default function NavBar({user}) {
  
  return (
    <>
    <div>
      <p>{user ?'welcom '+ user.firstName : 'login'}</p>
      {user && user.itemsInCart > 0 && (
        <p>{user.itemsInCart} in your cart</p>
      )}
    </div>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
