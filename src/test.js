import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RenderPrimitive from './'

Enzyme.configure({adapter: new Adapter()})

describe('<RenderPrimitive />', () => {
  describe('basic type rendering', () => {
    it('can render "null"', () => {
      const primitive = shallow(<RenderPrimitive>{null}</RenderPrimitive>)

      expect(primitive.text()).toEqual('null')
    })

    it('can render "undefined"', () => {
      const primitive = shallow(<RenderPrimitive>{undefined}</RenderPrimitive>)

      expect(primitive.text()).toEqual('undefined')
    })

    it('can render "true"', () => {
      const primitive = shallow(<RenderPrimitive>{true}</RenderPrimitive>)

      expect(primitive.text()).toEqual('true')
    })

    it('can render "false"', () => {
      const primitive = shallow(<RenderPrimitive>{false}</RenderPrimitive>)

      expect(primitive.text()).toEqual('false')
    })

    it('can render "Symbol(\'foo\')"', () => {
      const primitive = shallow(<RenderPrimitive>{Symbol('foo')}</RenderPrimitive>)

      expect(primitive.text()).toEqual(`Symbol(foo)`)
    })

    it('can render "123"', () => {
      const primitive = shallow(<RenderPrimitive>{123}</RenderPrimitive>)

      expect(primitive.text()).toEqual(`123`)
    })

    it('can render "NaN"', () => {
      const primitive = shallow(<RenderPrimitive>{NaN}</RenderPrimitive>)

      expect(primitive.text()).toEqual(`NaN`)
    })

    it('can render "Infinity"', () => {
      const primitive = shallow(<RenderPrimitive>{'Infinity'}</RenderPrimitive>)

      expect(primitive.text()).toEqual(`Infinity`)
    })

    it('can render "\'foo\'"', () => {
      const primitive = shallow(<RenderPrimitive>{'foo'}</RenderPrimitive>)

      expect(primitive.text()).toEqual(`foo`)
    })
  })

  describe('Prop shortcut', () => {
    it('should support "value" prop', () => {
      const primitive = shallow(<RenderPrimitive value={false} />)

      expect(primitive.text()).toEqual(`false`)
    })
  })
})
