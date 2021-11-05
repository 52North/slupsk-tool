from wq.db.patterns import serializers as patterns
from .models import Privatedish, Localproducer


class LocalproducerSerializer(patterns.AttachmentSerializer):
    class Meta(patterns.AttachmentSerializer.Meta):
        model = Localproducer
        exclude = ('privatedish',)
        object_field = 'privatedish'
        wq_config = {
            'initial': 1,
        }


class PrivatedishSerializer(patterns.AttachedModelSerializer):
    localproducers = LocalproducerSerializer(many=True, required=False)

    class Meta:
        model = Privatedish
        fields = "__all__"
