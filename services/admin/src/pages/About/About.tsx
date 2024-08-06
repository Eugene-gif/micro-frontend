import React from "react";
import { UserCard } from '@packages/shared/src/components/UserCard';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur in minima, iste dolores consequatur voluptates adipisci soluta labore ut magnam ad tempora eum quaerat, dicta saepe officiis earum ducimus repellat.</div>
        <div>Ad maxime tenetur quos molestiae. Ullam asperiores illo quas fugit? Rerum dicta aliquam, molestias placeat totam quidem iure quibusdam, sed incidunt nemo fugit voluptatem quo labore? Doloribus aspernatur voluptates quo?</div>
        <div>Natus esse maxime ex, unde, ullam commodi molestias inventore, mollitia neque blanditiis sint ad ipsum alias ipsam omnis! Quam, nulla? Laboriosam odit ducimus repellat quam pariatur tempora cupiditate eveniet cumque.</div>
      </div>
      <UserCard name={'Admin'} />
    </div>
  )
}

export default About;