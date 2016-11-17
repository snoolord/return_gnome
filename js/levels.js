export const levels =  () => {

  return [
    {
      level: 1,
      title: "Center",
      instructions: "<p>Welcome to Return Gnome, a game where you help Fred the Gnome and his friends find their way home by writing CSS code! Use <code>justify-content</code> property to guide Fred home.</br> Justify-content aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the Fred to the right.</p>",
      hint: "Use Display Flex to Center",
      gnomes: ['gnome.png'],
      houses: 1,
      solution: {'justify-content': 'center'}
    },
    {
      level: 2,
      title: "Space-between",
      instructions: "<p>On this level, use justify-content again to help Fred and Thomas!  Once, again justify-content aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the Fred to the right.</p>",
      hint: "Use justify-content: space-between",
      gnomes: ['gnome.png', 'gnome-brown.png'],
      houses: 2,
      solution: {'justify-content': 'space-between'}
    }
  ];
};
