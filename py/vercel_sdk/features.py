# Vercel SDK feature factory

from vercel_sdk.feature.base_feature import VercelBaseFeature
from vercel_sdk.feature.debug_feature import VercelDebugFeature
from vercel_sdk.feature.idempotency_feature import VercelIdempotencyFeature
from vercel_sdk.feature.metrics_feature import VercelMetricsFeature
from vercel_sdk.feature.paging_feature import VercelPagingFeature
from vercel_sdk.feature.ratelimit_feature import VercelRatelimitFeature
from vercel_sdk.feature.retry_feature import VercelRetryFeature
from vercel_sdk.feature.test_feature import VercelTestFeature
from vercel_sdk.feature.timeout_feature import VercelTimeoutFeature


_FEATURES = {
    "base": lambda: VercelBaseFeature(),
    "debug": lambda: VercelDebugFeature(),
    "idempotency": lambda: VercelIdempotencyFeature(),
    "metrics": lambda: VercelMetricsFeature(),
    "paging": lambda: VercelPagingFeature(),
    "ratelimit": lambda: VercelRatelimitFeature(),
    "retry": lambda: VercelRetryFeature(),
    "test": lambda: VercelTestFeature(),
    "timeout": lambda: VercelTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
