import { Compiler } from 'webpack'

interface Options {
  outFile?: string
}

class VueRouterInjectPlugin {
  constructor(private options: Options) {
  }

  apply(compiler: Compiler) {
  }
}

module.exports = VueRouterInjectPlugin;
