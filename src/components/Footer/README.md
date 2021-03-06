Footer is the second most important place where your basic site information and links should live. Users turn often to the footer to look for important information, such as contact details, or links to less prominent sections of the website (privacy policy, terms of use, etc).

```js
import { Footer } from '@wfp/ui';
```

```js
<Footer
  className="some-class" //optional
  logo="url/to/mobile/logo"
  logoExtended="url/to/desktop/logo"
  metaContent="Some Content"
  mobilePageWidth="full" //optional
  pageWidth="md">
   <div className="wfp--footer__info">
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">A label</p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">First Link</Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">Second Link</Link>
        </li>
      </ul>
    </div>
    <div className="wfp--footer__info__item">
      <p className="wfp--footer__label">Another label</p>
      <ul className="wfp--footer__list">
        <li>
          <Link href="http://www.wfp.org">First Link</Link>
        </li>
        <li>
          <Link href="http://www.wfp.org">Second Link</Link>
        </li>
      </ul>
    </div>
  </div>
</Footer>
```

| Setting         | Default                                       | Options               | Role                                                                                                  |
| --------------- | --------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------- |
| children        | `undefined`                                   | `string`              | The value which should be displayed                                                                   |
| options         | `undefined`                                   | `xs` `sm` `md` `lg`   | Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` |
| mobilePageWidth | `undefined`                                   | `full` `sm` `md` `lg` | Width on mobile devices `full`: `100%`                                                                |
| className       | `undefined`                                   | `string`              | Set Footer className                                                                                  |
| Logo            | `Vertical black english Logo from @wfp/icons` | `string`              | Footer Logo on Mobile Devices, if not set the default logo from `@wfp/icons` be used.                 |
| Logo            | `Extended black english from @wfp/icons`      | `string`              | Footer on Desktop Devices, if not set the default logo from `@wfp/icons` be used.                     |
| metaContent     | `undefined`                                   | `string` `component`  | Footer meta text                                                                                      |
