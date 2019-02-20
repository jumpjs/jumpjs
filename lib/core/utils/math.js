module.exports = {
  pointInCircle(x, y, cx, cy, radius) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
  },
  pointInBox(x, y, cx, cy, cw, ch) {
    return (y > cy && y < cy + ch && x > cx && x < cx + cw)
  }
}
