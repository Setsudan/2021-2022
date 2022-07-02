import { useState } from "react";
const pass = import.meta.env.VITE_FAMILY_PASSWORD;

export default function FamilyContentAccess() {
  const [allowed, setAllowed] = useState(false);
  const checkContent = (e) => {
    const input = e.target.value;
    if (input === pass || input.toUpperCase() === pass) {
      setAllowed(true);
    } else {
      setAllowed(false);
    }
  };

  if (!allowed) {
    return (
      <div id="access">
        <input
          type="password"
          name="password"
          id="password"
          onChange={checkContent}
          maxLength={pass.length}
          placeholder="Enter Password"
        />
      </div>
    );
  } else {
    return (
      <div id="familycontent">
        <span>Familia Events</span>
        <span>Familia Pictures</span>
        <span>QLNY && ETHLNY Game stats</span>
        <span>QLNY && ETHLNY Pictures</span>
        <span>Cousin's room</span>
      </div>
    );
  }
}
