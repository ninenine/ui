Links are typically used as a means of navigation either within the application, to a place outside, or to a resource. For anything else, especially things that change data and actions, you should be using a button.

Links can have the same properties as a regular `<a>`-element.

Links is based on a fork from [Carbon Components](https://www.carbondesignsystem.com/components/link/code) 


### Content
- Use text for links rather than graphics or icons.
- Links should be three words or less.
- Text should be consistent with the title of the intended destination.
- Use caution with links that are several words long. It is recommended that links are long enough to be understood by the user, but short enough to prevent text wrapping.
- Avoid the term “click here,” other links to “here,” or the web address itself. Instead, use a meaningful descriptive label for the link, and match the destination site name.


### Usage with react

```js
import { Link } from '@wfp/ui';
```

```js
<Link href="#">Link</Link>
```

### Use with react-router

Use the Link styling by adding the className `wfp--link` to `<NavLink />`

```js
<NavLink className="wfp--link">Link</NavLink>
```
