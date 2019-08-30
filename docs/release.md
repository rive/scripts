# release

## update package version number

edit each `package.json` in sub-folders:

```diff
-  "version": "1.2.2",
+  "version": "1.2.3",
   ...
   "dependencies": {
-      "@rive/shared": "1.2.2",
+      "@rive/shared": "1.2.3",
       ...
   }
```

## update changelog

move all entries under **unreleased** to **1.2.3**.

## create tag and release on github

version tag should be like `v1.2.3`.

## npm publish

run `npm publish --access public` in each sub-folder.
