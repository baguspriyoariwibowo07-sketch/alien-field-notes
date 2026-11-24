[![make.fun · u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/baguspriyoariwibowo07-sketch/alien-field-notes/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/baguspriyoariwibowo07-sketch/alien-field-notes/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

# Alien Field Notes: The Two-Day Earth — entry by bagus-priyo

A make.fun entry: an alien tourist's one-line review of planet
Earth. One line, at most 200 characters.

## The entry

> Four stars. The locals apologise to furniture, queue for bean water, and wave at machines that cannot see them. Charming, would orbit again.

140 characters, single line.

## Why it lands

It is shaped like a genuine travel review — a star rating up front
and a "would orbit again" verdict at the end — and the middle is
three precise, affectionate observations of everyday human
behaviour: apologising to furniture, queueing for coffee ("bean
water"), and waving at sensors. Each one is true, slightly absurd
from orbit, and none of them needs explaining.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` is a Node program using only the standard library. It
validates the line at runtime (single line, non-blank, code-point
count within the 200-character gate) and writes it to
`entry.txt` in the output directory — `MAKEFUN_OUTPUT_DIR` or
`OUTPUT_DIR` when set, otherwise `/output`, as in the grader.
