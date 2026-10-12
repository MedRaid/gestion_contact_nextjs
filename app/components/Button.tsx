"use client";
export const Button = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  return <button onClick={handleClick}>Visiter l&apos;application</button>;
};
