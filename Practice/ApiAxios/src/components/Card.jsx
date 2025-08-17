import React from "react";

const Card = (props) => {
  if (!props.data) {
    return (
      <div className="bg-red-400 text-black inline-block p-6 text-center rounded">
        <h1>No data yet</h1>
      </div>
    );
  }

  return (
    <div className="bg-red-400 text-black inline-block p-6 text-center rounded shadow-lg">
      <h1 className="text-xl font-bold mb-2">{props.data.author}</h1>
      <img
        src={props.data.download_url}
        alt={props.data.author}
        className="rounded-lg w-64 h-40 object-cover mx-auto"
      />
      <p className="mt-2">
        <a
          href={props.data.url}
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-800"
        >
          View on Unsplash
        </a>
      </p>
    </div>
  );
};

export default Card;
