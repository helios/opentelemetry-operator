#!/bin/bash

# OPERATOR_VERSION=$(git describe --tags)

gh config set prompt disabled
gh release create \
    -t "Release 0.0.1" \
    "0.0.1" \
    'dist/opentelemetry-operator.yaml#Installation manifest for Kubernetes'
