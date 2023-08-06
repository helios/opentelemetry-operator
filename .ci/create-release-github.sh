#!/bin/bash

# OPERATOR_VERSION=$(git describe --tags)

gh config set prompt disabled
gh release create \
    -t "Release 0.0.2" \
    "0.0.2" \
    'dist/opentelemetry-operator.yaml#Installation manifest for Kubernetes'
