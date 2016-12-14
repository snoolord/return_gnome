export const levels =  () => {

  return [
    {
      level: 1,
      title: "Center",
      instructions: "<p>Welcome to Return Gnome, a game inspired by Thomas Park's Flexbox Froggy! A fairy has taken control of the forest and keeps moving all the Gnomes' homes, getting them all lost! Help Fred the Gnome and his friends find their way home by writing CSS code! Use <code>justify-content</code> property to guide Fred home.</br> </br> <code>justify-content</code> aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the Fred to the right.</p>",
      hint: "Use Display Flex to Center",
      gnomes: ['gnome.png'],
      houses: 1,
      solution: {'justify-content': 'center'}
    },
    {
      level: 2,
      title: "Space-between",
      instructions: "<p>On this level, use justify-content again to help Fred and Thomas!  Once, again <code>justify-content</code> aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the Fred to the right.</p>",
      hint: "Use justify-content: space-between",
      gnomes: ['gnome.png', 'gnome-brown.png'],
      houses: 2,
      solution: {'justify-content': 'space-between'}
    },
    {
      level: 3,
      title: "Space-around",
      instructions: "<p>On this level, we will <code>justify-content</code> to help Fred, Dave and Thomas! </br> The following values might be useful:</p><ul><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>",
      hint: "Use justify-content: space-around",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'justify-content': 'space-around'}
    },
    {
      level: 4,
      title: "Flex-direction",
      instructions: "<p>A fairy moved Fred, Dave, and Thomas's house on top of each other! We need to use flex-direction to get them back home! </br> <code>flex-direction</code> takes these values:</p><ul><li><code>column</code>: Items display vertically.</li><li><code>column-reverse</code>: Items display vertically in reverse order.</li><li><code>row</code>: Items display horizontally.</li><li><code>row-reverse</code>:Items displayed horizontally in reverse</li></ul>",
      hint: "Use flex-direction: column",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'flex-direction': 'column'}
    },
    {
      level: 5,
      title: "Align-items",
      instructions: "<p>This fairy keeps moving Fred, Dave, and Thomas's house in the forest! Use <code>align-items</code> to get them back home! Align items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>",
      hint: "Use align-items: center",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'align-items': 'center'}
    },
    {
      level: 6,
      title: "Align-items",
      instructions: "<p>Use align-items again to get them back home! Align items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>",
      hint: "Use align-items: flex-end",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'align-items': 'flex-end'}
    },
    {
      level: 7,
      title: "Align-items + Justify-content",
      instructions: "<p>This fairy moved Fred's house into the middle of nowhere!! Use <code>justify-content</code> and <code>align-items</code> together to get him back home!",
      hint: "Use align-items: center, justify-content: center",
      gnomes: ['gnome.png'],
      houses: 1,
      solution: {'align-items': 'center', 'justify-content': 'center'}
    },
    {
      level: 8,
      title: "Transform + Justify-content",
      instructions: "<p>This fairy just turned the whole world upside down! Help Fred, Dave, and Thomas re-orient themselves back home! Use <code>justify-content</code> along with <code>transform</code> to get them back home! <code>transform</code> can take:</p><ul><li><code>scale(-1)</code>: Item flips horizontally</li><li><code>rotate(Xdeg)</code>: Item rotates depending on X degrees specified</li></ul><p>(i.e rotate(90deg) rotates the element 90 degrees)</p>",
      hint: "Use align-items: center",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'justify-content': 'space-around', 'transform': 'scale(-1)'}
    },
    {
      level: 9,
      title: "Align-items + Rotate",
      instructions: "<p>This fairy is on a rampage literally putting the world on its side! Use <code>align-items</code> and <code>flex-direction</code> with <code>transform</code> to get them back home! <code>transform</code> can take:</p><ul><li><code>scale(-1)</code>: Item flips horizontally</li><li><code>rotate(Xdeg)</code>: Item rotates depending on X degrees specified</li></ul><p>Also these properties might be useful:</p><ul><li><code>center</code>: Items align in the center vertically</li><li><code>column</code>: Items appear vertically in a column </li> </ul></p>",
      hint: "Use align-items: center",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'align-items': 'center', 'transform': 'rotate(90deg)', 'flex-direction': 'column'}
    },
    {
      level: 10,
      title: "Align-items + Rotate",
      instructions: "<p>This fairy is on a rampage literally putting the world on its side! Combine everything you learned to fight the fairy one last time! <code>align-items</code>, <code>flex-direction</code>, <code>justify-content</code>, and <code>transform</code>! Once again <code>transform</code> can take:</p><ul><li><code>scale(-1)</code>: Item flips horizontally</li><li><code>rotate(Xdeg)</code>: Item rotates depending on X degrees specified</li></ul><p>Also these properties might be useful:</p><ul><li><code>center</code>: Items align in the center vertically</li><li><code>column</code>: Items appear vertically in a column </li> </ul></p>",
      hint: "Use align-items: center",
      gnomes: ['gnome.png', 'gnome-purple.png', 'gnome-brown.png'],
      houses: 3,
      solution: {'align-items': 'flex-end', 'transform': 'rotate(90deg)', 'flex-direction': 'column', 'justify-content': 'space-between'}
    },
  ];
};
