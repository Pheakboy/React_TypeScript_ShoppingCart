import { Link } from "react-router";
import styled from "styled-components";

const ButtonNav = () => {
  return (
    <StyledWrapper>
      <div className="nav">
  
        <div className="container">
          <Link to="/" className="btn">Home</Link>
          <Link to="/contact" className="btn">Contact</Link>
          <button className="btn">About</button>
          <button className="btn">Privacy</button>
          <svg className="outline" overflow="visible" width={400} height={60} viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
            <rect className="rect" pathLength={100} x={0} y={0} width={800} height={60} fill="transparent" strokeWidth={4} />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dasharray: 10 40;
    transition: 0.5s;
    stroke: #ffcc00;
    stroke-width: 4;
  }

  .nav {
    position: relative;
    width: 800px;
    height: 60px;
  }

  .container:hover .outline .rect {
    transition: 1s;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }

  .btn {
    padding: 0.5em 1.5em;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    background: transparent;
    transition: 0.3s;
    font-size: 1rem;
  }

  .btn:hover {
    color: #222;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    .nav {
      width: 100%;
    }

    .container {
      flex-direction: column;
      height: auto;
    }

    .btn {
      width: 100%;
      text-align: center;
      padding: 0.8em;
    }
  }
`;

export default ButtonNav;
