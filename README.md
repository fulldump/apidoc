# ApiDoc

Autogenerate online documentation for golax REST APIs.

## How to use

```go
    my_api := golax.NewApi()
    apidoc.Build(my_api)
```

## ApiDoc developer

If you want to develop ApiDoc, maybe you want to regenerate the
file `files.go` with the new static files:

```sh
go run utils/genstatic.go --dir=static/ --package=apidoc > files.go
```
